import { FirebaseError } from "firebase/app";
import firebase_app from "../firebase";
import { WhereFilterOp, collection, connectFirestoreEmulator, deleteDoc, doc, getDoc, getDocs, getFirestore, setDoc, updateDoc, query, where } from "firebase/firestore";

const firebase_db = getFirestore(firebase_app);
// connectFirestoreEmulator(firebase_db, '127.0.0.1', 8080); // TODO: remove in prod

interface IDBNames {
    YEARS_DB_NAME: string,
    MONTHS_DB_NAME: string,
    USERS_DB_NAME: string,
    CONNECTION_DB_NAME: string,
    BILLS_DB_NAME: string,
    RECEIPTS_DB_NAME: string,
    ITEMS_DB_NAME: string
}

const testNames: IDBNames = {
    YEARS_DB_NAME: 'test_years',
    MONTHS_DB_NAME: 'test_months',
    USERS_DB_NAME: 'test_users',
    CONNECTION_DB_NAME: 'test_connections',
    BILLS_DB_NAME: 'test_bills',
    RECEIPTS_DB_NAME: 'test_receipts',
    ITEMS_DB_NAME: 'test_items'
}

const productionNames: IDBNames = {
    YEARS_DB_NAME: 'years',
    MONTHS_DB_NAME: 'months',
    USERS_DB_NAME: 'users',
    CONNECTION_DB_NAME: 'connections',
    BILLS_DB_NAME: 'bills',
    RECEIPTS_DB_NAME: 'receipts',
    ITEMS_DB_NAME: 'items'
}

export enum DataState {
    NEEDS_FIRST_LOAD,
    NEEDS_REFRESH,
    NEEDS_STATS_UPDATE,
    IS_OK
}

export const DB_ACCESS_NAMES: IDBNames = productionNames;

export async function getDocumentCollectionData(
    documentCollectionName: string,
    dataConverter: any,
    fieldName?: string,
    operator?: WhereFilterOp,
    valueName?: string
): Promise<any[]> {
    const collectionRef = collection(firebase_db, documentCollectionName)
    let q = undefined;
    if (
        (fieldName !== undefined && fieldName !== '') &&
        (operator !== undefined) &&
        (valueName !== undefined)
    ) {
        q = query(collectionRef, where(fieldName, operator, valueName));
    }
    const docsSnap = await getDocs(q === undefined ? collectionRef : q);
    if (docsSnap.size === 0) { return [] }

    const dataArray: any[] = [];
    docsSnap.forEach(doc => {
        dataArray.push(dataConverter.fromFirestore(doc));
    });

    return dataArray;
}

export async function getDocumentData(
    documentCollectionName: string,
    documentName: string,
    dataConverter: any
): Promise<any | undefined> {
    const docRef = doc(firebase_db, documentCollectionName, documentName).withConverter(dataConverter);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) { return undefined }

    const data = docSnap.data();

    return data;
}

export async function addDocument(
    documentCollectionName: string,
    documentName: string,
    dataConverter: any,
    data: any
): Promise<boolean> {
    if (await isDocumentExisting(documentCollectionName, documentName)) {
        return false;
    }

    await setDocumentData(documentCollectionName, documentName, dataConverter, data);
    return true;
}

export async function deleteDocument(
    documentCollectionName: string,
    documentName: string
): Promise<boolean> {
    if (!(await isDocumentExisting(documentCollectionName, documentName))) {
        return false;
    }

    await deleteDoc(doc(firebase_db, documentCollectionName, documentName));
    return true;
}

export async function setDocumentData(
    documentCollectionName: string,
    documentName: string,
    dataConverter: any,
    data: any
): Promise<void> {
    const docRef = doc(firebase_db, documentCollectionName, documentName);
    try {
        await setDoc(docRef, dataConverter.toFirestore(data))
    } catch (error) {
        console.error((error as FirebaseError).message)
        const findUndefinedProperties = (obj: any, path = '') => {
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    const newPath = path ? `${path}.${key}` : key;
                    if (obj[key] === undefined) {
                        console.error(`Undefined property found: ${newPath}`);
                    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                        findUndefinedProperties(obj[key], newPath);
                    }
                }
            }
        }

        // Call the function with your data object
        findUndefinedProperties(dataConverter.toFirestore(data));

        console.error('Data:', dataConverter.toFirestore(data))

    }
}

export async function updateDocumentData(
    documentCollectionName: string,
    documentName: string,
    dataConverter: any,
    data: any
): Promise<boolean> {
    const docRef = doc(firebase_db, documentCollectionName, documentName);

    if (!(await isDocumentExisting(documentCollectionName, documentName))) {
        return false
    }
    try {
        await updateDoc(docRef, dataConverter.toFirestore(data));
    } catch (error) {
        console.error((error as FirebaseError).message)
        const findUndefinedProperties = (obj: any, path = '') => {
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    const newPath = path ? `${path}.${key}` : key;
                    if (obj[key] === undefined) {
                        console.error(`Undefined property found: ${newPath}`);
                    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
                        findUndefinedProperties(obj[key], newPath);
                    }
                }
            }
        }

        // Call the function with your data object
        findUndefinedProperties(dataConverter.toFirestore(data));

        console.error('Data:', dataConverter.toFirestore(data))

    }
    return true;
}

export async function isDocumentExisting(
    documentCollectionName: string,
    documentName: string
): Promise<boolean> {
    const docRef = doc(firebase_db, documentCollectionName, documentName);
    const docSnap = await getDoc(docRef);

    return docSnap.exists();
}

export default firebase_db;

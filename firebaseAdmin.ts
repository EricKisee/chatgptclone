import { getApps } from "firebase-admin/app";
import admin from "firebase-admin"

const serviceAccount = require("././serviceAccountKey.json")

// const serviceAccount = JSOif (!getApps().length) 

if (!getApps().length) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    })
}

const adminDB = admin.firestore()

export {adminDB}
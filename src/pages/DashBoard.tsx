import React, { useState } from 'react'
import app from '../components/base'

const DashBoard = (file:string) => {
    
    const storage = app.storage().ref()

    const saveImage = async (file : any) => {
        try{
            const msgRef = await app.firestore().collection('lands').add({
                imageUrl: ""
            })

            const nowUser: null | 
            nowUser = await app.auth()
            const filePath = nowUser.currentUser.uid + '/' + msgRef.id + '/' + file.name;


            await app.storage().ref(filePath)

        }catch (err) {
            console.log(err)
        }
        


    }




    return (
        <div>
            <input className="mediaCapture" type="file"></input>
        </div>
    )
}

export default DashBoard


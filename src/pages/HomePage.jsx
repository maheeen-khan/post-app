import React, { useEffect, useState } from 'react'
import { db, collection, addDoc, getDocs } from '../firebaseConfig/firebase.js'
import PostForm from '../components/PostForm.jsx'
import PostCard from '../components/PostCard.jsx'
const HomePage = () => {


  const [dataToShow, setDataToShow] = useState([])
  const tempData = [];

  const displayData = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data().username}`);
      tempData.push({authorName : doc.data().username, authorData: doc.data().post });
      setDataToShow(tempData);
    });
  }


  const addPost = async (data) => {
    alert(data.name)
    alert(data.desc)

    try {
      const docRef = await addDoc(collection(db, "posts"), {
        username: data.name,
        post: data.desc,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }


  
  useEffect(() => {
    displayData()
  }, [PostForm])


  return (
    <>
      <div className="container w-50 mt-5">
        <PostForm addPost={addPost} />

        <div className="showData d-flex justify-content-center align-item-center flex-column gap-5">
    {dataToShow.map((v,i)=> 
       <PostCard field1={v.authorName} field2={v.authorData}/>
    )}

 

        </div>
      </div>
    </>
  )
}

export default HomePage
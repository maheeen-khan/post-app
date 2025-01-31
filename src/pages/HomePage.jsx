import React, { useEffect, useState, useContext } from 'react'
import { db, collection, addDoc, getDocs } from '../firebaseConfig/firebase.js'
import PostForm from '../components/PostForm.jsx'
import PostCard from '../components/PostCard.jsx'
import MySpinner from '../components/Spinner.jsx'
import LikeCounterContext from '../context/LikeContextContext.js'
import {LikeOutlined} from '@ant-design/icons'

const HomePage = () => {
  //Context API

  const { likeCount } = useContext(LikeCounterContext);
  const [dataToShow, setDataToShow] = useState([])
  const tempData = [];

  const displayData = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data().username}`);
      tempData.push({ authorName: doc.data().username, authorData: doc.data().post });
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


        <div class="card">
          <div class="circle-container">
            <div class="circle bg-blue"></div>
            <div class="circle bg-purple"></div>
            <div class="circle bg-pink"></div>
          </div>
          <div class="card__content  justify-content-center mt-1">
    
          <LikeOutlined style={{color: 'blue', fontSize:'21px'}}/> <br />
            <h6>Liked Posts: {likeCount}</h6>

          </div>
        </div>



        <div className="showData d-flex justify-content-center align-item-center flex-column gap-5">
          {dataToShow.length > 0 ?
            dataToShow.map((v, i) =>
              <PostCard field1={v.authorName} field2={v.authorData} />

            )
            :
            <MySpinner />
          }



        </div>
      </div>
    </>
  )
}

export default HomePage
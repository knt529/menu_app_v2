import { useState, useEffect } from 'react'
import { db } from '../../../firebase';
import { doc, getDocs, addDoc, collection, deleteDoc } from 'firebase/firestore';
import '../../style/components/block/Date.scss'
import CommonDialog from '../atoms/CommonDialog';


type Task = {
  docId: string;
  date: string;
  timeStamp: string;
};

function Date(){
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [date, setDate] = useState<string>("");
  const [isOpenDeleteConfirm, setIsOpenDeleteConfirm] = useState(false);
  const [deleteDocId, setDeleteDocId] = useState<string>('');

  const dispData = () => {
    const tasksCollectionRef = collection(db, 'Date');
    getDocs(tasksCollectionRef).then((querySnapshot) => {
      const  userList: Task[] = [];
      let count: number = 0;
      querySnapshot.docs.map((doc, index) => {
        const task: Task = {
          docId: doc.id,
          date: doc.data().date,
          timeStamp: doc.data({serverTimestamps:"estimate"}).timeStamp,
        };
        userList.push(task);
        count += 1;
      });
      setTaskList(userList);
    });
  };
  
  const doChangeData = (inputText: string) => {
    if (inputText === '') {
      return;
    };
    const tasksCollectionRef = collection(db, 'Date');
    const documentRef = addDoc(tasksCollectionRef, {
      date: inputText,
    });
    setDate('');
    dispData();
  };

  const deleteTaskConfirm = (docId: string) => {
    setDeleteDocId(docId);
    setIsOpenDeleteConfirm(true);
  };

  const deleteTask = async() => {
    setIsOpenDeleteConfirm(false);
    const userDocumentRef = doc(db, 'Date', deleteDocId);
    await deleteDoc(userDocumentRef);
    dispData();
  };

  
  useEffect(() => {
    dispData();
  }, []);

  return(
    <div>
     <div className="date">
      <p className='choice'>↓↓ 作成を開始する日付を選択してください</p>
      <label className="date-edit">
       <input className='' type="date" onChange={(e) => {setDate(e.target.value)}}
       />
       <input
        className='dateSubmit'
        type="submit"
        value="追加"
        onClick={() => doChangeData(date)}
      />    
      </label>
      <div>
       {taskList.map((user, index) => (
       <div>
        <table key={index.toString()} className='dateTable'>
          <div>
          <div id={`date${index.toString()}`} className="date-content">
            <h1>
              {user.date}~の献立
            </h1>
            <button className='dateDelete' onClick={() => deleteTaskConfirm(user.docId)}>
              削除
            </button>
        <CommonDialog
            msg="削除しますか？"
            isOpen={isOpenDeleteConfirm}
            doYes={deleteTask}
            doNo={() => {setIsOpenDeleteConfirm(false)}}
            />
            </div>
          </div>    
        </table>
        </div>
      ))}
      </div>
     </div>
   </div>
  )
}

export default Date
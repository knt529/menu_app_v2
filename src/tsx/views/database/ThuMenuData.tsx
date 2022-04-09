import { useState, useEffect }  from 'react';
import { db } from '../../../firebase';
import { doc, getDocs, addDoc, collection, deleteDoc } from 'firebase/firestore';
import { Button } from '@material-ui/core'
import {
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core'
import CommonDialog from '../atoms/CommonDialog';


type Task = {
  docId: string;
  taskText: string;
  timeStamp: string;
};

function ThuMenuData() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState<string>('');
  const [isOpenDeleteConfirm, setIsOpenDeleteConfirm] = useState(false);
  const [deleteDocId, setDeleteDocId] = useState<string>('');

  // 表示
  const dispData = () => {
    const tasksCollectionRef = collection(db, 'ThuMenu');
    getDocs(tasksCollectionRef).then((querySnapshot) => {
      const  userList: Task[] = [];
      let count: number = 0;
      querySnapshot.docs.map((doc, index) => {
        const task: Task = {
          docId: doc.id,
          taskText: doc.data().taskText,
          timeStamp: doc.data({serverTimestamps:"estimate"}).timeStamp,
        };
        userList.push(task);
        count += 1;
      });
      setTaskList(userList);
    });
  };

  // 登録
  const addTask = (inputText: string) => {
    if (inputText === '') {
      return;
    };
    const tasksCollectionRef = collection(db, 'ThuMenu');
    const documentRef = addDoc(tasksCollectionRef, {
      taskText: inputText,
    });
    setTaskText('');
    dispData();
  };

  // 削除(確認)
  const deleteTaskConfirm = (docId: string) => {
    setDeleteDocId(docId);
    setIsOpenDeleteConfirm(true);
  };

  // 削除
  const deleteTask = async() => {
    setIsOpenDeleteConfirm(false);
    const userDocumentRef = doc(db, 'ThuMenu', deleteDocId);
    await deleteDoc(userDocumentRef);
    dispData();
  };


  // 初期処理
  useEffect(() => {
    dispData();
  }, []);

  return (
    <>
    <TableContainer>
      <Table>      
          <TableBody>
            <TableRow>
              <TableCell>
                <form>
                <input
                  className='inputForm'
                  value={taskText}
                  onChange={(e) => {setTaskText(e.target.value)}}
                />
                </form>
              </TableCell>
              <TableCell>
                <button
                  className='submit'
                  onClick={() => addTask(taskText)}>
                    追加
                </button>
              </TableCell>
            </TableRow>
      {taskList.map((user, index) => (
        <>
        <TableRow key={index.toString()}>
          <TableCell>
            <Typography id={`taskText${index.toString()}`}>
              {user.taskText}
            </Typography>
          </TableCell>
          <TableCell>
            <Button
              variant="outlined"
              onClick={() => deleteTaskConfirm(user.docId)}
            >
              <i className="fa-solid fa-trash-can"></i>
            </Button>
          </TableCell>
        </TableRow>
        <CommonDialog
          msg="削除しますか？"
          isOpen={isOpenDeleteConfirm}
          doYes={deleteTask}
          doNo={() => {setIsOpenDeleteConfirm(false)}}
        />
        </>
      ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ThuMenuData;
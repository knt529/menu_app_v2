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
import { makeStyles } from '@material-ui/core/styles'


type Task = {
  docId: string;
  taskText: string;
  timeStamp: string;
};

function TueLackData() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState<string>('');
  const [isOpenDeleteConfirm, setIsOpenDeleteConfirm] = useState(false);
  const [deleteDocId, setDeleteDocId] = useState<string>('');

  // 表示
  const dispData = () => {
    const tasksCollectionRef = collection(db, 'TueLack');
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
    const tasksCollectionRef = collection(db, 'TueLack');
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
    const userDocumentRef = doc(db, 'TueLack', deleteDocId);
    await deleteDoc(userDocumentRef);
    dispData();
  };


  // 初期処理
  useEffect(() => {
    dispData();
  }, []);


  const useStyles = makeStyles((theme) => ({
    list: {
      [theme.breakpoints.down('xs')]: {
        padding: '10px',
    },
    },
  }));

  const classes = useStyles();

  return (
    <>
    <TableContainer>
      <Table>      
          <TableBody>
            <TableRow>
            <div className='Form'>
              <TableCell className={classes.list}>              
                <input
                  value={taskText}  
                  className='inputForm'      
                  onChange={(e) => {setTaskText(e.target.value)}}
                />
              </TableCell>
              <TableCell className={classes.list}>
                <input
                  className='submit'
                  type="submit"
                  value="追加"
                  onClick={() => addTask(taskText)}
                />
              </TableCell>
              </div>
            </TableRow>
      {taskList.map((user, index) => (
       <div className='List'>
       <TableRow key={index.toString()} >
         <TableCell className={classes.list}>
           <Typography id={`taskText${index.toString()}`}>
           <div className='list'>
             {user.taskText}
           </div>
           </Typography>
           <div className='delete'>
           <Button
             variant="outlined"
             onClick={() => deleteTaskConfirm(user.docId)}
           >
             <i className="fa-solid fa-trash-can"></i>
           </Button>
           </div>
         </TableCell>    
       </TableRow>
       <CommonDialog
         msg="削除しますか？"
         isOpen={isOpenDeleteConfirm}
         doYes={deleteTask}
         doNo={() => {setIsOpenDeleteConfirm(false)}}
       />
       </div>
      ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TueLackData;
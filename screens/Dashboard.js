import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import CheckBox from '@react-native-community/checkbox';

import firestore from '@react-native-firebase/firestore';

const usersCollection = firestore().collection('Users');


const tasks = [{
  t_id: 1,

  task_name: "task1",
  task_description: "first task",
  status: true,

}
  ,
{
  t_id: 1,

  task_name: "task1",
  task_description: "first task",
  status: true,

}
  ,
{
  t_id: 1,

  task_name: "task1",
  task_description: "first task",
  status: true,

}
  ,
{
  t_id: 1,

  task_name: "task1",
  task_description: "first task",
  status: true,

}
  ,
{
  t_id: 1,

  task_name: "task1",
  task_description: "first task",
  status: true,

}
  ,
{
  t_id: 1,

  task_name: "task1",
  task_description: "first task",
  status: true,

}
  ,
{
  t_id: 1,

  task_name: "task1",
  task_description: "first task",
  status: true,

}
  , {
  t_id: 1,

  task_name: "task1",
  task_description: "first task",
  status: true,

}
  ,

{
  t_id: 1,

  task_name: "task1",
  task_description: "first task",
  status: true,

}
  ,
{
  t_id: 1,

  task_name: "task1",
  task_description: "first task",
  status: true,

}
  ,

{
  t_id: 1,

  task_name: "task1",
  task_description: "first task",
  status: true,

}
  ,
{
  t_id: 1,

  task_name: "task1",
  task_description: "first task",
  status: true,

}
  ,

{
  t_id: 1,

  task_name: "task1",
  task_description: "first task",
  status: true,

}
  ,
{
  t_id: 1,

  task_name: "task1",
  task_description: "first task",
  status: true,

}
  ,]

function Dashboard() {
  const [value, setValue] = useState(tasks);
  const updatetask = async = (index1, value) => {
    setValue(prev => { return prev.map((item, index) => index === index1 ? { ...item, status: value } : item) })
  }
  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Text>task name </Text>
        <Text>task description</Text>
        <Text>status</Text>
      </View>
      {

        value.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text>{item.task_name}</Text>
            <Text>{item.task_description}</Text>
            <Text>{item.task_name}</Text>
            <CheckBox
              disabled={false}
              value={item.status}
              onValueChange={(value) => { updatetask(index, value) }

              }
            />
          </View>
        ))
      }
    </View>
  );
}


export default Dashboard
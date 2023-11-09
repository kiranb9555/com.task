import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import CheckBox from '@react-native-community/checkbox';


const tasks=[{
t_id:1,

  task_name:"task1",
  task_description:"first task",
  status:true,

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
    const [value, setValue] = useState(true);
    return (
      <View>
        <View  style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Text>task name </Text>
          <Text>task description</Text>
          <Text>status</Text>
        </View>
        {
         
          tasks.map((item, index) => (
            <View key={index} style={{flexDirection:'row',justifyContent:'space-around'}}>
              <Text>{item.task_name}</Text>
              <Text>{item.task_description}</Text>
              <Text>{item.task_name}</Text>
              <CheckBox
                disabled={false}
                value={false}
                onValueChange={(value) => { tasks[index].status = value, console.log(tasks[index]); setValue(!value) }
                 
                }
              />
            </View>
          ))
        }
      </View>
    );
  }


export default Dashboard
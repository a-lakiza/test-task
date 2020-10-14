import React, { useState, useEffect } from 'react';
import { Table, Popconfirm, message, Button } from 'antd';
import formConfigurations from '../data/formConfigurations.json';

const HomePage = (props) => {
  const { history } = props;
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("contactsStorage")) || [];
    setContacts(data);
  }, [])

  const deleteContact = (e, id) => {
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(filteredContacts);
    localStorage.setItem("contactsStorage", JSON.stringify(filteredContacts))

    message.success('Contact successfully deleted');
  }

  const columns = formConfigurations.map((conf) => {
    return {
      title: conf.label,
      dataIndex: conf.name,
      key: conf.name,
      fixed: 'left',
      render: (text, item) => text || '-'
    }
  })
  
  columns.push({
    title: 'action',
    key: 'operation',
    fixed: 'left',
    width: 100,
    render: (text, item) => {
      return (
        <Popconfirm
          title="Are you sure delete this contact?"
          onConfirm={(event) => deleteContact(event, item.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button key={item.id} >
            Delete
          </Button>
        </Popconfirm>
      )
    }
  })
  
  return (
    <div>
      <Table columns={columns} dataSource={contacts} bordered size="small" />
      <Button onClick={() => history.push('/form')} type="primary">Add new contact</Button>
    </div>
  )
}

export default HomePage;

import React from 'react'
import Table from '../../../components/Table'

const Roles_Settings = () => {

  const rolesColumns = [
    { key: "name", label: "Name" },
    { key: "role", label: "Roles" },
    { key: "created_by", label: "Created By" },
  ];

  const rolesData = [
    { name: "John", role: "Admin", created_by: "Super Admin" },
    { name: "John", role: "Admin", created_by: "Super Admin" },
    { name: "John", role: "Admin", created_by: "Super Admin" },
    { name: "John", role: "Admin", created_by: "Super Admin" },
    { name: "John", role: "Admin", created_by: "Super Admin" },
    { name: "John", role: "Admin", created_by: "Super Admin" },
    { name: "John", role: "Admin", created_by: "Super Admin" },
    { name: "John", role: "Admin", created_by: "Super Admin" },
    { name: "John", role: "Admin", created_by: "Super Admin" },
  ];

  return (
    <>
     <Table
        setting_title="Roles"
        add_button={false}
        columns={rolesColumns}
        data={rolesData}
        EditRoute="/settings/user/edit_user_setting"
      />
    </>
  )
}

export default Roles_Settings
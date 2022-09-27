import React from 'react'
import styles from './styles.css'

type Props = {
    departments: [Category],
    handleSetSlug: any
}
 
type Category = {
    id: number,
    name: string
    slug: string
}

const DepartmentGroup = ({ departments, handleSetSlug}: Props) => {
    console.log("mi grupo de departamento es: ", departments)


    const onHandleSetSlug = (event: any) => {
        handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
    }
    const departmentOptions: any = departments.map ((department: Category) => {
    return (
        <option
        value={department.slug}
        key={department.id}
        >
            {department.name}
        </option>
    )})


   return(

    <select
    className={styles.select__container}
    onChange={onHandleSetSlug}
    defaultValue="value0"
    >
        <option disabled value='value0' className={styles.search__container}>Busqueda por departamento</option>
        {departmentOptions}
    </select>

    
)}

export default DepartmentGroup
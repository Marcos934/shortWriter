import React from 'react'
import { FormulariodeLogin } from '../components/FormularioLogin'
import styles from '../styles/Pages/Login.module.css'


export  default function Login(){
    return(
        <html className={styles.container}>
          <FormulariodeLogin />
        </html>
    )
}
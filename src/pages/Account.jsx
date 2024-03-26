import { useState, useEffect } from "react";
import PathConstants from "../routes/pathConstants";

import accountsService from "../services/accounts";
import axios from "axios";

import settingsService from "../services/settings";
import { useNavigate } from "react-router-dom";


const IsAdmin = ({is_admin}) => {
    if (is_admin) return <p>Jest adminem</p>         
}

const Account = () => {

    const navigate = useNavigate();

    const [settings, setSettings] = useState(null)
    useEffect(() => {
        settingsService
        .getAll()
        .then(response => {
            let acc_id = response.data.logged_in
          setSettings(4)
        // console.log(acc_id)

        })
    }, [])
    // jeżeli nie zalogowany to przekieruj do strony logowania
    useEffect(() => {
        if (!settings) {
            navigate(PathConstants.LOGIN.replace());
        }
    })

    const [account, setAccount] = useState({})
    useEffect(() => {
        accountsService
        .getAll()
        .then(response => {
            setAccount(response.data[4])
        })
    })


    return (
        <div>
            <h1>
                Nazwa użytkownika: {account.username}
            </h1>
            <IsAdmin is_admin={account.is_admin}/>
        </div>
      )
  }
  
  export default Account
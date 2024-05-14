import React from "react"
import useTheme from "../contexts/theme";

export default function ThemeBtn() {
    const {themeMode, lightTheme, darkTheme} = useTheme();

    // const onChangeBtn = (e)=>{
    //     // const darkModeStatus = e.currentTarget.checked
    //     // if(darkModeStatus){
    //     //     darkTheme()
    //     // }else{
    //     //     lightTheme()
    //     // }
    // }

    const toggleTheme = (e) => {
        document.documentElement.classList.toggle("dark");
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) { 
            dark
        }
        else { }
    }

    return (
        <label className="relative inline-flex items-center cursor-pointer">
            <button className="bg-[#333337] light:bg- rounded-full hover:bg-slate-500" onClick={toggleTheme} >theme</button>
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-white ">Toggle Theme</span>
        </label>
    )
}

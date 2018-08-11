import React from "react";
//import TextField from "material-ui/TextField";
//import SearchIcon from "./SearchIcon";

export default ({
    filterText,
    onFilterTextChange
}) => {

    const style = {
    outerDiv: {
        width: 420,
        height: 60
       
    },
        
        
        
        txtFilter: {
            marginLeft: 10,
            marginTop: 10,
    width: 360, 
    height: 40,
       borderColor:"#efeaea",
           borderWidth: 2
        }
    }

    return <div style={style.outerDiv}>
        <img alt="" src={require("./search.png")} />
        <textarea placeholder="Filter" name="txtFilter" style={style.txtFilter} onChange={onFilterTextChange} value={filterText} />

       

        
        
         
        
        </div>
}
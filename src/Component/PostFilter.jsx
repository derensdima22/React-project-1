import React from "react";
import MyInput from "./UI/input/MyInput";
import { MySelect } from "./UI/select/MySelect";

 const PostList =({filter,setFilter})=>{
    return(
        <div>
        <MyInput
          value={filter.query}
          onChange={(e) => setFilter({...filter, query: e.target.value})}
          placeholder="Поиск..."
        />
        <MySelect
          value={filter.sort}
          onChance={selectedSort =>setFilter({...filter,sort:selectedSort}) }
          defaultValue="Сортировка"
          options={[
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
          ]}
        />
      </div>
    )
}

export default PostList;
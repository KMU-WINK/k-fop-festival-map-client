import SearchHistory from "../SearchHistory/SearchHistory";
import SearchHeader from "../SearchHeader/SearchHeader";
import HashTag from "../HashTag/HashTag";
import React,{useState,useEffect} from "react"

function Search(){

    const [history, setHistory] = useState([])
    const [hashTag, setHashTag] = useState([])

    React.useEffect(() => {
        async function exec(){
            await setHistory([
                {
                    name : "소융대"
                },
                {
                    name : "윙크"
                }
            ])

            await setHashTag([
                {
                    tagName : "#밥보다는 간식"
                },
                {
                    tagName : "#ㅋㅋㅋㅋ"
                }
            ])
        }
        exec()
        console.log(hashTag)
    },[])

    return(
        <>
            <SearchHeader/>

            <HashTag tag = {hashTag}/>

            <SearchHistory histories = {history}/>
        </>
    )
}



export default Search
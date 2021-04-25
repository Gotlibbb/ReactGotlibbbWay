import styles from "./users.module.css";
import React, {useState} from "react";

type PaginationPropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    currentPage: number
}

const Pagination = (props: PaginationPropsType) => {
    let [inputPage, setInputPage] = useState<string>(" ")
    let pageCount: number | undefined = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages: number[] = [];

    for (let i = 0; i <= pageCount; i++) {
        pages.push(i)
    }

    if (pageCount >= 10) {

        let errorInput: boolean = Number(inputPage) >= pages.length || Number(inputPage) <= 0
        let errorButton: boolean =  props.currentPage+1>= pages.length|| props.currentPage <= 0
        return <div className={styles.pageS}>


            <div className={styles.pageSwitch}>
                {props.currentPage !== 1 && <button onClick={() => {
                    props.onPageChanged(pages[props.currentPage - 1])
                    setInputPage(" ")
                }}>⇐...prev page </button>}
                <div > {props.currentPage} </div>
                <button disabled={errorButton}
                    onClick={() => {
                    props.onPageChanged(pages[props.currentPage + 1])
                    setInputPage(" ")
                }}> next page...⇒</button>
            </div>

            <div className={styles.changePage}>
                <span>Change page: </span>
                <input type="number" value={inputPage}
                       onChange={(e) => setInputPage(e.currentTarget.value)}
                       onKeyPress={(e) => {
                           if (e.key === "Enter" && !errorInput) props.onPageChanged(Number(inputPage))
                       }}
                />

                <button onClick={() => {
                    props.onPageChanged(Number(inputPage))
                }}
                        disabled={errorInput}
                >↪
                </button>
            </div>


            <span className={styles.totalPage}>Total pages: {pages.length - 1}</span>

        </div>
    }


    return <div className={styles.pageS}>
        {props.currentPage === 0 && pages.map(p => {
            return <span onClick={() => {
                props.onPageChanged(p)
            }} className={props.currentPage === p && styles.selectedPage || styles.page}>{p}</span>


        })}
    </div>

}

export default React.memo(Pagination)
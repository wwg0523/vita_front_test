//<< 타입스크립트 DOC >>

import { useState } from "react";

interface MybuttonProps {
    //(버튼 안에 보여질 텍스트)
    title : string;
    //(버튼이 상호작용할 수 있는지 여부)
    disabled : boolean;
}



function MyButton({title,disabled}:MybuttonProps){

    return (
        <button disabled={disabled}>{title}</button>
    );
}


// << 훅 써보기 >>
//[ useState ]
//타입을 boolean으로 추론
//# const [enabled, setEnabled] = useState(false);
//명시적으로 타입 설정
// const [enabled,setEnabled] = useState<boolean>(false);
//## useState를 사용하는 법을 알고 있어야 하네

//[ useReducer ]
// 새파일 만듬 : useReducer




// << 컴포넌트 >>
export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton title="I'm a button" disabled={false}/>
        </div>
    );
}
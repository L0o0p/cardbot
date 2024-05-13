import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useAtom } from 'jotai';
import { selectedComponentAtom, setPositionAtom } from '../store';
import { furniturestore } from "../List";

export const Layout = () => {
    const [input, setInput] = useState(true)
    const [prompt, setPrompt] = useState('')
    const [position, setPosition] = useState({ x: 0, y: 0, z: 0 })
    const [, setSelectedComponent] = useAtom(selectedComponentAtom);
    const [, setPositionGlobal] = useAtom(setPositionAtom);
    const [page, setPage] = useState(0)

    // const furniture = {
    //     'obj': [
    //         { 'cube': <Cube /> },
    //         { 'ball': <Ball /> },
    //         { 'cyll': <Cyli /> }
    //     ]
    // };
    const handleClick = () => {
        console.log(position);
        const key = prompt.toLowerCase() as 'chair';
        const found = furniturestore.obj.find(item => key in item);
        if (found) {
            setSelectedComponent(found[key]);
            console.log(found[key]);
        } else {
            setSelectedComponent(null);
        }
        setPositionGlobal(position)
    };

    return (
        <div style={{ overflow: 'hidden' }}>

            <div
                style={{
                    cursor: 'pointer',
                    zIndex: 10,
                    position: 'absolute',
                    backgroundColor: 'orange',
                    width: '50px',
                    height: '50px',
                    textAlign: 'center',
                    alignContent: 'center',
                    padding: '12px',
                    borderRadius: '999px',
                    top: '40px',
                    left: '10px'
                }} onClick={() => setInput(!input)}
            >Gen</div>

            {(input) && (
                (page === 0) && (
                    < div
                        style={{
                            width: '400px',
                            height: '500px',
                            position: 'absolute',
                            top: '10px',
                            left: '10px',
                            backgroundColor: '#f1f1f1',
                            borderRadius: '20px',
                            zIndex: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            // flex: 1,
                            alignItems: 'center',
                            // justifyContent: 'center',
                            padding: '24px',
                            gap: '20px'
                        }}
                    >
                        <div
                            style={{
                                // backgroundColor: 'red',
                                justifyContent: 'end',
                                display: 'flex',
                                width: '100%',
                            }}
                        >
                            <div style={{
                                width: '24px',
                                height: '24px',
                                cursor: 'pointer'
                            }}
                                onClick={() => { setInput(!input) }}
                            >
                                <CloseOutlined />
                            </div>
                        </div>

                        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                            THREE MAGIC
                        </div>
                        < div
                            style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        >
                            <textarea
                                name="postContent"
                                rows={20} cols={40}
                                placeholder="Descriptions..."
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                style={{
                                    resize: 'none'
                                }}
                            />
                        </div>
                        <div
                            style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                        >
                            <button
                                onClick={() => { handleClick() }}
                            >Generate</button>
                            <button
                                onClick={() => { setPage(1) }}
                            >assign position</button>
                        </div>
                    </div>
                ) ||
                (page === 1) && (<div
                    style={{
                        width: '400px',
                        height: '500px',
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: '#f1f1f1',
                        borderRadius: '20px',
                        zIndex: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        // flex: 1,
                        alignItems: 'center',
                        // justifyContent: 'center',
                        padding: '24px',
                        gap: '20px',
                    }}
                >
                    <div
                        style={{
                            // backgroundColor: 'red',
                            justifyContent: 'end',
                            display: 'flex',
                            width: '100%',
                        }}
                    >
                        <div style={{
                            width: '24px',
                            height: '24px',
                            cursor: 'pointer'
                        }}
                            onClick={() => { setInput(!input) }}
                        >
                            <CloseOutlined />
                        </div>
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                        Object Position
                    </div>
                    <div style={{ display: 'flex', gap: '10px', }}>
                        <label>x</label>
                        <input
                            type="text"
                            value={position.x}
                            onChange={(e) => setPosition({ ...position, x: parseFloat(e.target.value) })}
                        />
                    </div>
                    <div style={{ display: 'flex', gap: '10px', }}>
                        <label>y</label>
                        <input
                            type="text"
                            value={position.y}
                            onChange={(e) => setPosition({ ...position, y: parseFloat(e.target.value) })}
                        />
                    </div>
                    <div style={{ display: 'flex', gap: '10px', }}>
                        <label>z</label>
                        <input
                            type="text"
                            value={position.z}
                            onChange={(e) => setPosition({ ...position, z: parseFloat(e.target.value) })}
                        />
                    </div>
                    <button
                        onClick={() => { setPage(0) }}
                    >describe object
                    </button>
                    <button
                        onClick={() => { handleClick() }}
                    >Generate</button>
                </div>)
            )}

        </div >
    )
    // }
}





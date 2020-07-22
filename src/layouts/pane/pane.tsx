import * as React from 'react'

export const Pane = (
    props: {
        width?: number,
        height?: number,
        background?: string,
        children:React.ReactNode
    }
) => {
    const style: React.CSSProperties = {
        width: props.width ? `${props.width}px` : undefined,
        height: props.height ? `${props.height}px` : undefined,
        minWidth: props.width ? `${props.width}px` : undefined,
        minHeight: props.height ? `${props.height}px` : undefined,
        flexGrow: props.width == null && props.height == null ? 1 : undefined,
        alignSelf: props.width == null && props.height == null ? 'stretch' : undefined,
        background: props.background
    }
    return (
        <div style={style} className="pane">
            {props.children}    
        </div>
    )
}
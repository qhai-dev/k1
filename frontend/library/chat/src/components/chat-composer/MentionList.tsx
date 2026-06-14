import type { SuggestionProps } from "@tiptap/suggestion"
import { useEffect, useImperativeHandle, useState, forwardRef } from "react"

export interface MentionListRef {
    onKeyDown: (props: { event: KeyboardEvent }) => boolean
}
export const MentionList = forwardRef(function (props: SuggestionProps, ref) {
    const [selectedIndex, setSelectedIndex] = useState(0)

    const selectItem = (index: number) => {
        const item = props.items[index]

        if (item) {
            props.command({ id: item })
        }
    }

    const upHandler = () => {
        setSelectedIndex((selectedIndex + props.items.length - 1) % props.items.length)
    }

    const downHandler = () => {
        setSelectedIndex((selectedIndex + 1) % props.items.length)
    }

    const enterHandler = () => {
        selectItem(selectedIndex)
    }

    useEffect(() => setSelectedIndex(0), [props.items])

    useImperativeHandle(ref, () => ({
        onKeyDown: (event: KeyboardEvent) => {
            if (event.key === "ArrowUp") {
                upHandler()
                return true
            }

            if (event.key === "ArrowDown") {
                downHandler()
                return true
            }

            if (event.key === "Enter") {
                enterHandler()
                return true
            }

            return false
        },
    }))

    return (
        <div className="dropdown-menu">
            {props.items.length ? (
                props.items.map((item, index) => (
                    <button
                        className={index === selectedIndex ? "is-selected" : ""}
                        key={index}
                        onClick={() => selectItem(index)}
                    >
                        {item}
                    </button>
                ))
            ) : (
                <div className="item">No result</div>
            )}
        </div>
    )
})

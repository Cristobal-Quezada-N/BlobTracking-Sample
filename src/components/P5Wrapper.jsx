import React, { useRef, useEffect } from 'react'

import p5 from 'p5'

function P5Wrapper({ sketch }) {
    const blockContainer = useRef(null)
    const p5Instance = useRef(null)

    useEffect(() => {
        if (blockContainer.current) {
            p5Instance.current = new p5(sketch, blockContainer.current)
        }

        return () => {
            if (p5Instance.current) {
                p5Instance.current.remove()
                p5Instance.current = null
            }
        }
    }, [sketch])

    return <div ref={blockContainer}></div>
}

export default P5Wrapper

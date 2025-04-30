function handleClick(event) {
    console.log("Hello!");
    console.log(event);
}

function handleMouseOver() {
    console.log("Bye!");
}

function handleDoubleClick() {
    console.log("double clicked!");
}

export default function Button() {
    return (
        <div>
            <button onClick={handleClick}>Click Me!</button>
            <p onMouseOver={handleMouseOver}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio nulla provident et soluta officia, numquam ut
                ratione. Expedita itaque vitae sequi officia earum non beatae
                eum consequatur inventore! Hic aut odio reiciendis, minima
                suscipit magnam ipsam tenetur ullam quisquam sequi, officiis
                est, assumenda dolores sint culpa laboriosam tempora porro
                nihil!
            </p>
            <button onDoubleClick={handleDoubleClick}>doubleClick</button>
        </div>
    );
}

export function calcFontSize(node, fontSize, itemName) {
    if (
        itemName.split(" ").length > 2 &&
        itemName.length / itemName.split(" ").length >= 5
    ) {
        let nameSpan = node.querySelector("span");
        for (; nameSpan.offsetHeight > (node.offsetHeight / 3) * 2; ) {
            fontSize -= 0.05;
            nameSpan.style.fontSize = `calc(var(--u) * ${fontSize})`;
        }
    }
}
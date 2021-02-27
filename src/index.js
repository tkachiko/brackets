module.exports = function check(str, bracketsConfig) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        for (let j = 0; j < bracketsConfig.length; j++) {
            const opening = bracketsConfig[j][0];
            const closing = bracketsConfig[j][1];
            if (
                char === opening &&
                !(opening === closing && opening === stack[stack.length - 1])
            ) {
                stack.push(closing);
            } else if (char === closing) {
                if (closing === stack.pop()) {
                    continue;
                } else {
                    return false;
                }
            }
        }
    }
    return stack.length === 0;
};
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    function TrieNode() {
        this.children = {};
        this.isEnd = false;
    }

    let root = new TrieNode();

    const insert = (word) => {
        let node = root;
        for (let ch of word) {
            if (!node.children[ch]) {
                node.children[ch] = new TrieNode();
            }
            node = node.children[ch];
        }
        node.isEnd = true;
    };

    for (let word of strs) {
        insert(word);
    }

    let prefix = "";
    let node = root;

    while (true) {
        let keys = Object.keys(node.children);
        if (keys.length !== 1 || node.isEnd) break; 
        
        prefix+=keys[0]
        node = node.children[keys[0]]
    }

    return prefix;
};

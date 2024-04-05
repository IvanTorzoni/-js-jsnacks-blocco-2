function wordCheck(word1, word2) {
    if (word1.length > word2.length) {
        return word1;
    } else if (word1.length === word2.length) {
        return word1 && word2
    } else {
        return word2
    }
}
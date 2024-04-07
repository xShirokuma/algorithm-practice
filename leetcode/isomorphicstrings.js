var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false
    }

    const mapStoT = {}
    const mapTtoS = {}

    for (let i = 0; i < s.length; i++) {
        const charS = s[i]
        const charT = t[i]

        if (!mapStoT[charS]) {
            mapStoT[charS] = charT
        } else if (mapStoT[charS] !== charT) {
            return false
        }

        if (!mapTtoS[charT]) {
            mapTtoS[charT] = charS
        } else if (mapTtoS[charT] !== charS) {
            return false
        }
    }

    return true
}

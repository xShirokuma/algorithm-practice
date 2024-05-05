var compareVersion = function(version1, version2) {
    const v1Components = version1.split('.').map(Number);
    const v2Components = version2.split('.').map(Number);
    const maxLength = Math.max(v1Components.length, v2Components.length);

    for (let i = 0; i < maxLength; i++) {
        const v1 = i < v1Components.length ? v1Components[i] : 0;
        const v2 = i < v2Components.length ? v2Components[i] : 0;

        if (v1 > v2) {
            return 1;
        } else if (v1 < v2) {
            return -1;
        }
    }

    return 0;
};

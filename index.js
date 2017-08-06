module.exports = function (sliceObject, start, end) {
    start = Math.max(0, start)
    const newStart = sliceObject.start + start
    return {
        start: newStart,
        end: Math.min(newStart + (end - start), sliceObject.end)
    }
}

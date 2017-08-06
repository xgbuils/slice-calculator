const test = require('tape')
const tapSpec = require('tap-spec')

const sliceCalculator = require('./')

let result

test('constructor', function (t) {
    t.test('no sliced object', function (st) {
        const obj = Object.freeze({
            start: 0,
            end: 6
        })
        result = sliceCalculator(obj, 0, 8)
        st.deepEqual(result, {
            start: 0,
            end: 6
        })

        result = sliceCalculator(obj, 0, 4)
        st.deepEqual(result, {
            start: 0,
            end: 4
        })

        result = sliceCalculator(obj, 2, 4)
        st.deepEqual(result, {
            start: 2,
            end: 4
        })

        result = sliceCalculator(obj, -2, 5)
        st.deepEqual(result, {
            start: 0,
            end: 5
        })

        result = sliceCalculator(obj, 5, 6)
        st.deepEqual(result, {
            start: 5,
            end: 6
        })

        result = sliceCalculator(obj, 6, 10)
        st.ok(result.start >= result.end)

        result = sliceCalculator(obj, 4, 2)
        st.ok(result.start >= result.end)

        result = sliceCalculator(obj, 0, 0)
        st.ok(result.start >= result.end)

        result = sliceCalculator(obj, 3, 3)
        st.ok(result.start >= result.end)

        st.end()
    })

    t.test('non empty sliced object', function (st) {
        const obj = Object.freeze({
            start: 2,
            end: 5
        })
        result = sliceCalculator(obj, 0, 8)
        st.deepEqual(result, {
            start: 2,
            end: 5
        })

        result = sliceCalculator(obj, 0, 2)
        st.deepEqual(result, {
            start: 2,
            end: 4
        })

        result = sliceCalculator(obj, 1, 4)
        st.deepEqual(result, {
            start: 3,
            end: 5
        })

        result = sliceCalculator(obj, 1, 2)
        st.deepEqual(result, {
            start: 3,
            end: 4
        })

        result = sliceCalculator(obj, 2, 3)
        st.deepEqual(result, {
            start: 4,
            end: 5
        })

        result = sliceCalculator(obj, 3, 4)
        st.ok(result.start >= result.end)

        result = sliceCalculator(obj, 1, 1)
        st.ok(result.start >= result.end)

        st.end()
    })

    t.test('start === end sliced object', function (st) {
        const obj = Object.freeze({
            start: 2,
            end: 2
        })
        result = sliceCalculator(obj, 0, 8)
        st.ok(result.start >= result.end)

        result = sliceCalculator(obj, 0, 2)
        st.ok(result.start >= result.end)

        result = sliceCalculator(obj, 1, 4)
        st.ok(result.start >= result.end)

        result = sliceCalculator(obj, 1, 2)
        st.ok(result.start >= result.end)

        result = sliceCalculator(obj, 2, 3)
        st.ok(result.start >= result.end)

        result = sliceCalculator(obj, 3, 4)
        st.ok(result.start >= result.end)

        st.end()
    })

    t.test('start > end sliced object', function (st) {
        const obj = Object.freeze({
            start: 4,
            end: 2
        })
        result = sliceCalculator(obj, 0, 8)
        st.ok(result.start >= result.end)

        result = sliceCalculator(obj, 0, 2)
        st.ok(result.start >= result.end)

        result = sliceCalculator(obj, 1, 4)
        st.ok(result.start >= result.end)

        result = sliceCalculator(obj, 1, 2)
        st.ok(result.start >= result.end)

        result = sliceCalculator(obj, 2, 3)
        st.ok(result.start >= result.end)

        result = sliceCalculator(obj, 3, 4)
        st.ok(result.start >= result.end)

        st.end()
    })
})

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout)

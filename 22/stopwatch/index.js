function Stopwatch() {
    // These are private variables because they don't have "this" to open them publicly
    let startTime
    let endTime
    let running
    let duration = 0

    this.start = function() {
        if (running) {
            throw new Error("Stopwatch has already started")
        }

        running = true

        startTime = new Date()
    }

    this.stop = function() {
        if (!running) {
            throw new Error("Stopwatch has not started")
        }

        running = false

        endTime = new Date()

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000
        duration += seconds
    }

    this.reset = function() {}
}
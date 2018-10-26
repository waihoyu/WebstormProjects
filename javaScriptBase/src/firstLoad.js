function isFirstLoad() {

    var  _lsit = []

    return function (id) {
        if (_list.indexOf(id) >=0 ){
            return false
        }
        else {
            _list.push(id)
            return true
        }

        _lsit.push(id)
    }
}

let firstLoad = isFirstLoad()

firstLoad(10)

firstLoad(10)

firstLoad(20)

firstLoad(20)

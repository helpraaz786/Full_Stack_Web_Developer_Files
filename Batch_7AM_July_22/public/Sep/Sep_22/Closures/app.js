var mathUtil;

(() => {

    document.querySelector("#addBtn").addEventListener("click", () => {
        doOperation('add');
    });

    var usename = 'test';
    var count = 0;
    var doOperation = (oprType) => {
        count++;
        var fvalue = document.querySelector("#fValue").value;
        var svalue = document.querySelector("#sValue").value;
        var result;
        switch(oprType) {
            case 'add':
                result = mathUtil.getAdditionOfValues(fvalue, svalue);
                break;
            case 'div':
                result = getDivision(fvalue, svalue);
                break;
            case 'mul':
                result = getMultiplication(fvalue, svalue);
                break;
            case 'sub':
                result = mathUtil.getSubstraction(fvalue, svalue);
                break;
        }
        document.querySelector("#res").innerText = result;
        document.querySelector("#opr").innerText = oprType;
        document.querySelector(".rBlock").style.display = 'block';

        document.querySelector("#counter").innerText = count;
    }
})();
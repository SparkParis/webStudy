$(function () {
    // 1. 按下回车 把完整数据 存储到本地存储里面
    // 存储的数据格式var todolis=[{title:"xxx",done:false}]
    // 为输入框设置回车相应事件 
    load();
    $("#title").on("keydown", function (event) {
        // 当按下回车键时触发相应
        if (event.keyCode === 13) {
            if ($(this).val() === "") {
                alert("请输入内容");
            } else {
                // 先读取本地操作
                var local = getData();
                // local数组进行更新数据,吧最新的数据添加给local数组
                local.push({ title: $(this).val(), done: false });
                console.log(local);

                // 把local数组存储到本地数据
                saveData(local);
                // 本地数据渲染到加载页面
                load();
                // 渲染完页面清除input中的内容
                $(this).val("");

            }

        }
    });

    // todolist的删除操作,事件委托
    $("ol,ul").on("click", "a", function () {
        // alert("111");
        var data = getData();
        console.log(data);
        // 删除操作需要在local数组中进行删除之后在添加会local,最终先显示在页面
        // 修改数据
        var index = $(this).attr("id");//获取自定义属性,在渲染页面的时候已经添加了a元素的id属性
        // splice(index,num);删除指定位置和个数的数组元素
        data.splice(index, 1);
        // 保存到本地存储
        saveData(data);
        // 重新渲染页面
        load();

    })

    // 正在进行和已完成选项操作
    $("ol,ul").on("click", "input", function () {
        // 先获取本地存储的数据
        var data = getData();
        // 修改数据,通过兄弟节点a的自定义属性attr来获取当前元素的索引号
        var index = $(this).siblings("a").attr("id");
        data[index].done = $(this).prop("checked");
        console.log($(this).prop("checked"));
        // 保存到本地数据
        saveData(data);
        // 重新渲染界面
        load();


    })

    // 读取本地操作
    function getData() {
        var data = localStorage.getItem("todolist");
        // console.log(data);
        if (data != null) {
            // 转化本地格式的字符串格式
            return JSON.parse(data);
        } else {
            return [];//返回一个空的数组,用于存储todo内容
        }
    }

    // 保存本地内容
    function saveData(data) {
        localStorage.setItem("todolist", JSON.stringify(data));
    }

    // 本地数据渲染到加载页面
    function load() {
        var data = getData();
        //遍历之前要清空ol中的数据
        $("ul,ol").empty();
        var todocCount = 0;
        var doneCount = 0;
        //遍历数组
        $.each(data, function (i, item) {
            // console.log(item);
            if (item.done) {
                $("ul").prepend("<li><input type='checkbox' checked='checked' > <p>" + item.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                doneCount++;
            } else {
                $("ol").prepend("<li><input type='checkbox'  > <p>" + item.title + "</p> <a href='javascript:;' id=" + i + " ></a></li>");
                todocCount++;
            }
        });
        $("#todocount").text(todocCount);
        $("#donecount").text(doneCount);

    }




})
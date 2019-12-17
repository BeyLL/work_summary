var GanttQuery = function (params) {


    this._employee = params.employee;
    this._programe = params.programe;
    this._plan = params.plan;

    this.query = function (params) {

        if (!params) {
            return this._gantt();
        }



    }

    this._gantt = function () {

        var gantt = [];

        for (var i = 0; i < this._employee.length; i++) {

            var employee = this._employee[i];

            var resPlan = this._queryplan(employee.id);

            if (resPlan.length == 0) {

                continue;
            }

            for (var j = 0; j < resPlan.length; j++) {

                var sub = {};

                if (j == 0) {
                    sub.name = employee.name;
                }

                var plan = resPlan[j];

                var resPrograme = this._queryPrograme(plan.pro_id);
                if (!resPrograme) {
                    continue;
                }

                sub.desc = resPrograme.name;

                var resTask = this._queryTasks(plan.pro_id, plan.task_ids);

                sub.values = [];

                for (var k = 0; k < resTask.length; k++) {

                    var task = resTask[k];

                    sub.values.push({

                        from: new Date(task.start).valueOf(),
                        to: new Date(task.end).valueOf(),
                        label: task.name,
                        customClass: resPrograme.style,
                        dataObj: resPrograme
                    })
                }

                gantt.push(sub);

            }
        }

        return gantt;
    }

    this._queryplan = function (emp_id) {

        if (!emp_id) {
            return this._plan;
        }

        var result = [];

        for (var i = 0; i < this._plan.length; i++) {

            var plan = this._plan[i];
            if (plan.emp_id == emp_id) {

                result.push(plan);
            }
        }

        return result;
    }

    this._queryPrograme = function (pro_id) {

        if (!pro_id) {
            return this._programe;
        }

        for (var i = 0; i < this._programe.length; i++) {

            var programe = this._programe[i];
            if (programe.id == pro_id) {

                return programe;
            }
        }

        return null;
    }


    this._queryTasks = function (pro_id, task_ids) {

        if (!pro_id) {
            return [];
        }

        var programe = null;

        for (var i = 0; i < this._programe.length; i++) {

            if (this._programe[i].id == pro_id) {

                programe = this._programe[i];
                break;
            }
        }

        if (programe == null) {

            return [];
        }

        if (!task_ids || task_ids.length == 0) {

            return programe.task;
        }

        var result = [];
        for (var j = 0; j < programe.task.length; j++) {

            if (task_ids.indexOf(programe.task[j].id) != -1) {

                result.push(programe.task[j]);
            }

        }

        return result;
    }


}
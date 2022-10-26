text('should take old men older then 90', ()=> {
    const ages =[10, 20, 22, 1, 100, 90, 14];

    const predicate = (age => age > 90);

    const oldAges = ages.filter(predicate);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);


})


text('should take courses chipper 160', ()=> {
    const courses = [
            {title: 'CSS', price: 100},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150}
    ]

    const chipPredicate = (course: courseType) => {
        return course.price < 160;
    }

    const oldCourses = courses.filter(chipPredicate);

    expect(oldCourses.length).toBe(2);
    expect(oldCourses[0].title).toBe('CSS');
    expect(oldCourses[1].title).toBe('REACT');


})


test ('get only completed tasks', ()=> {

    const tasks = [
        {id:1, title: 'Bread', isDone: false},
        {id:1, title: 'Milk', isDone: true},
        {id:1, title: 'Sugar', isDone: false},
        {id:1, title: 'Salt', isDone: true}
    ]



    const completedTasks = tasks.filter(task=>task.isDone)



})



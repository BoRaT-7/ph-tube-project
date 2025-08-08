function gettime(time) {
    const hour = parseInt(time / 3600);
    let reminiscesecond = time % 3600;
    const minute = parseInt(reminiscesecond / 60);
    reminiscesecond = reminiscesecond % 60;
    return `${hour} hour ${minute} minute ${reminiscesecond} second ago`;
}

console.log(gettime(5520)); 

function countDown(num) {
  if (num <= 0) {
    console.log('all done');
    return;
  }
  console.log(num);

  countDown(num - 1);
}

countDown(100);

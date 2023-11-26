function draw() {
  background(255);

  // Display the current message
  fill(0);
  text(messages[currentMessage], width / 2, height / 2);

  // Check for space bar press
  if (keyIsPressed && key === ' ' && currentMessage < messages.length - 1) {
    currentMessage++;
  }

  // Check for mouse hold
  if (currentMessage === 1) {
    text("Hold down your mouse for a bit. You can let go once you feel ready", width / 2, height / 2);

    if (mouseIsPressed) {
      let pressure = map(mouseY, 0, height, 0, 255); // Map mouseY to pressure
      background(255 - pressure); // Visualize pressure with background color
    } else {
      currentMessage++;
    }
  }

  // Display assigned number
  if (currentMessage === 2) {
    assignedNumber = floor(random(1, 31));
    text(assignedNumber, width / 2, height / 2);
  }
}

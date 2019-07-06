class Boundry {
  constructor() {

  }

  checkBounds(particle)
  {
    if(particle.pos.x > 0 && particle.pos.x < width && particle.pos.y > 0 && particle.pos.y < height)
    {
      return false;
    }

    //  We hit left wall
    if(particle.pos.x < 5)
    {
      let vector = p5.Vector.add(particle.angle,createVector(1,0));
      particle.setAngle(vector.normalize());
      return true;
    }

    //  We hit right wall
    if(particle.pos.x > width)
    {
      let vector = p5.Vector.add(particle.angle,createVector(-1,0));
      particle.setAngle(vector.normalize());
      return true;
    }

    //  We hit top wall
    if(particle.pos.y < 0)
    {
      let vector = p5.Vector.add(particle.angle,createVector(0,1));
      particle.setAngle(vector.normalize());
      return true;
    }

    //  We hit bottom
    if(particle.pos.y > height)
    {
      let vector = p5.Vector.add(particle.angle,createVector(0,-1));
      particle.setAngle(vector.normalize());
      return true;
    }


  }






}

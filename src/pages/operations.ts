function add (a: number, b: number) {
    return a+b;
}

export const calculateDegreeValue = (angle: number) => {
    const radian: number = angle * (Math.PI) / 180;
    return Math.sin(radian).toFixed(10);
}
export const getGradientPerIndex = (index: number) => {
  return [
    'bg-gradient-purple from-transparent to-gradient-pink',
    'bg-gradient-orange from-transparent to-gradient-yellow',
    'bg-gradient-blue from-transparent to-gradient-cyan',
  ][index % 3]
}

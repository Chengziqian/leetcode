function interpret(command: string): string {
  return command.replace(/\(al\)/g, 'al').replace(/\(\)/g, 'o');
};
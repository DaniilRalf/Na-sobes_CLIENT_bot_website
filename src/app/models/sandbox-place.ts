export interface SandboxDataType {
  number: number,
  question: string,
  // answer:({[SandboxDataAnswerType.Code]: string} | {[SandboxDataAnswerType.Paragraph]: string})[] | string
  answer: any
}
export enum SandboxDataAnswerType {
  Paragraph = 'paragraph',
  Code = 'code',
}

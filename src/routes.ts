import { Request, Response } from 'express';

export function thisCourseInfo(request: Request, response: Response) {
  return response.json({
    platform: 'rocketseat ignite',
    started: new Date('2021-07-31T01:00Z'),
    course: 'nodeJS with typescript',
  });
}
export function addEntry(request: Request, response: Response) {
  const { comment } = request?.body;
  const date = new Date();

  return response.json({
    message: 'Entry added successfully!',
    comment,
    date,
  });
}

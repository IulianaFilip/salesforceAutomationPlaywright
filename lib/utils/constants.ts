import dotenv from 'dotenv';

dotenv.config();

export const DEFAULT_BASE_URL = process.env.DEFAULT_BASE_URL || 'https://computing-fun-4210.my.salesforce.com';

export const users = {
  admin: `iulianafilip.office-exjb@force.com`,
}
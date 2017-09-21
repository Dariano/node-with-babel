import suportest from 'supertest'
import chai from 'chai'
import app from '../../src/app'

global.app = app
global.request = suportest(app)
global.expect = chai.expect
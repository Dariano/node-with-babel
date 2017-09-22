import suportest from 'supertest'
import chai from 'chai'
import setupApp from '../../src/app'

global.setupApp = setupApp
global.supertest = suportest
global.expect = chai.expect